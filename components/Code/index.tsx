import React, { useState } from "react";
import { StatusText } from "./CodeStatusText";
import { CodeContainer, CodeItem, CodeItemContent, CodeItemHeader } from "./styles";
import { CodeTextField } from "./CodeTextField";
import { Checkbox } from "../Checkbox";
import CodeStatus from "../../utils/codeStatus";
import { Button } from "../Button";

export interface CodeProps {
  id: number,
  status: CodeStatus,
  code: string,
  origin: string | null,
}

export const Code: React.FC<CodeProps> = ({ id, status, code, origin }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [domain, setDomain] = useState<string>(origin === null ? '' : origin);

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
  }

  return (
    <CodeContainer>
      <CodeItem>
        <CodeItemHeader />
        <CodeItemContent>
          <Checkbox checked={isChecked} onChange={changeCheckbox} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem>
        <CodeItemHeader>License code</CodeItemHeader>
        <CodeItemContent>
          <CodeTextField placeholder="" value={code} copy={true} readOnly={true} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem full>
        <CodeItemHeader>Domain</CodeItemHeader>
        <CodeItemContent>
          {status === CodeStatus.ACTIVE
          ? <CodeTextField placeholder="" value={domain} readOnly={true} />
          : <CodeTextField placeholder="" value={domain} onChange={(e) => setDomain(e.target.value)} />
        }
        </CodeItemContent>
      </CodeItem>
      {status === CodeStatus.INACTIVE &&
        <CodeItem>
          <CodeItemHeader />
          <CodeItemContent>
            <Button
              label="Activate"
              theme="secondary"
            />
          </CodeItemContent>
        </CodeItem>
      }
      <CodeItem>
        <CodeItemHeader>Status</CodeItemHeader>
        <CodeItemContent>
          <StatusText status={status} />
        </CodeItemContent>
      </CodeItem>
    </CodeContainer>
  )
}
