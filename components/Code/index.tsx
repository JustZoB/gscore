import React, { useState } from "react";
import { StatusText } from "./CodeStatusText";
import { CodeContainer, CodeItem, CodeItemContent, CodeItemHeader } from "./styles";
import { CodeTextField } from "./CodeTextField";
import { Checkbox } from "../Checkbox";
import CodeStatus from "../../utils/codeStatus";

export interface CodeProps {
  id: number,
  status: CodeStatus,
  code: string,
  origin: string | null,
}

export const Code: React.FC<CodeProps> = ({ id, status, code, origin }) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
  }
  
  return (
    <CodeContainer>
      <CodeItem>
        <CodeItemHeader></CodeItemHeader>
        <CodeItemContent>
          <Checkbox checked={isChecked} onChange={changeCheckbox} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem>
        <CodeItemHeader>License code</CodeItemHeader>
        <CodeItemContent>
          <CodeTextField placeholder="License code" value={code} copy={true} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem full>
        <CodeItemHeader>Domain</CodeItemHeader>
        <CodeItemContent>
          <CodeTextField placeholder="Domain" value={origin}/>
        </CodeItemContent>
      </CodeItem>
      <CodeItem>
        <CodeItemHeader>Status</CodeItemHeader>
        <CodeItemContent>
          <StatusText status={status} />
        </CodeItemContent>
      </CodeItem>
    </CodeContainer>
  )
}
