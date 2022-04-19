import { createEntityAdapter, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Code, Subscribe } from '../../services/axios';
import { fetchActiveCode, fetchGetSubscribes, fetchManageHoldingCodes, fetchUpgradeSubscribe } from './actions';

type SubscribesState = {
  subscribes: Subscribe[] | undefined
  keepHoldingCodesIds: number[]
  keepHoldingSubscribeId: number | undefined
  activeIdSubscribe: number
  paginationActiveElement: number
  paginationLength: number
  loading: 'idle' | 'loading' | 'failed'
  error: SerializedError | undefined
}

const subscribesAdapter = createEntityAdapter<SubscribesState>();

const subscribesSlice = createSlice({
  name: 'subscribesSlice',
  initialState: subscribesAdapter.getInitialState<SubscribesState>({
    subscribes: undefined,
    keepHoldingCodesIds: [],
    keepHoldingSubscribeId: undefined,
    activeIdSubscribe: 0,
    paginationActiveElement: 1,
    paginationLength: 1,
    loading: 'idle',
    error: undefined,
  }),
  reducers: {
    paginationNext: (state) => {
      if (state.paginationActiveElement !== state.paginationLength) {
        state.paginationActiveElement++
        state.keepHoldingCodesIds = []
        state.keepHoldingSubscribeId = undefined
      }
    },
    paginationPrev: (state) => {
      if (state.paginationActiveElement !== 1) {
        state.paginationActiveElement--
        state.keepHoldingCodesIds = []
        state.keepHoldingSubscribeId = undefined
      }
    },
    setActiveIdSubscribe: (state, action) => {
      state.activeIdSubscribe = action.payload
    },
    addIdToKeeping: (state, action) => {
      state.keepHoldingCodesIds.push(action.payload.id)
      state.keepHoldingSubscribeId = action.payload.subscribeId
    },
    removeIdFromKeeping: (state, action) => {
      state.keepHoldingCodesIds = state.keepHoldingCodesIds.filter(id => {
        if (id !== action.payload.id) return id
      })
      if (state.keepHoldingCodesIds.length === 0) {
        state.keepHoldingSubscribeId = undefined
      }
    },
    clearingSubscribes: (state) => {
      state.keepHoldingCodesIds = []
      state.keepHoldingSubscribeId = undefined
      state.paginationActiveElement = 1
      state.loading = 'idle'
      state.error = undefined
    },
    clearAfterLogOut: (state) => {
      state.subscribes = undefined
      state.keepHoldingCodesIds = []
      state.keepHoldingSubscribeId = undefined
      state.activeIdSubscribe = 0
      state.paginationActiveElement = 1
      state.paginationLength = 1
      state.loading = 'idle'
      state.error = undefined
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchGetSubscribes.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchGetSubscribes.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.subscribes = action.payload.subscribes
        state.paginationLength = action.payload.subscribes.length
      })
      .addCase(fetchGetSubscribes.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })

      .addCase(fetchActiveCode.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchActiveCode.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.subscribes = state.subscribes.map(subscribe => {
          if (subscribe.id === action.payload.code.subscribeId) {
            subscribe.codes = subscribe.codes.map(code => {
              if (code.id === action.payload.code.id) {
                return action.payload.code
              }

              return code
            })
          }

          return subscribe
        })
      })
      .addCase(fetchActiveCode.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })

      .addCase(fetchUpgradeSubscribe.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchUpgradeSubscribe.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        action.payload.callBack()
      })
      .addCase(fetchUpgradeSubscribe.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })

      .addCase(fetchManageHoldingCodes.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchManageHoldingCodes.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.subscribes = state.subscribes.map(subscribe => {
          if (subscribe.id === state.keepHoldingSubscribeId) {
            subscribe.codes = action.payload.codes
          }

          return subscribe
        })
        state.keepHoldingCodesIds = []
        state.keepHoldingSubscribeId = undefined
      })
      .addCase(fetchManageHoldingCodes.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
  },
});

export const {
  setActiveIdSubscribe,
  paginationNext,
  paginationPrev,
  addIdToKeeping,
  removeIdFromKeeping,
  clearingSubscribes,
  clearAfterLogOut,

} = subscribesSlice.actions;

export default subscribesSlice.reducer;
