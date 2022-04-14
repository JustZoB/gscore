import React from "react";
import { Button } from "../../components/Button";
import { StatusText } from "../../components/Code/CodeStatusText";
import {
  TableBlockContainer,
  TableBlockHeader,
  TableBlockHeaderText,
  TableBlockContent,
  TableBlockContentItem,
  TableBlockContentText,
  TableBlockContentDate,
  TableBlockContentItemContainer,
} from "../../components/TableBlock/styles";
import { Product } from "../../services/axios";
import CodeStatus from "../../utils/codeStatus";

export interface CardSubscribeProps {
  id: number,
  currentPeriodStart: number,
  currentPeriodEnd: number,
  status: CodeStatus,
  product: Product,
}

export const CardSubscribe: React.FC<CardSubscribeProps> = ({ id, currentPeriodStart, currentPeriodEnd, status, product }) => {
  return (
    <TableBlockContainer>
      <TableBlockHeader>
        <TableBlockHeaderText>Gscore</TableBlockHeaderText>
        <TableBlockHeaderText>
          <StatusText status={status} />
        </TableBlockHeaderText>
      </TableBlockHeader>
      <TableBlockContent>
        <TableBlockContentItem>
          <TableBlockContentItemContainer>
            <TableBlockContentText>
              {product.sitesCount} sites license, valid until
            </TableBlockContentText>
            <TableBlockContentDate>
              {new Date(currentPeriodStart * 1000).toLocaleDateString()}
            </TableBlockContentDate>
          </TableBlockContentItemContainer>
          <TableBlockContentText>{product.prices[0].price}$</TableBlockContentText>
        </TableBlockContentItem>
        <TableBlockContentItem>
          <Button
            label="View"
            theme="secondary"
          />
        </TableBlockContentItem>
      </TableBlockContent>
    </TableBlockContainer>
  )
}
