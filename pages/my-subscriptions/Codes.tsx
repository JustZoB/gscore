import { Code } from "../../components/Code";
import { Subscribe } from "../../services/axios";

export interface CodesProps {
  subscribes: Subscribe[],
}

export const Codes: React.FC<CodesProps> = ({ subscribes }) => {
  return (
    <>
      {subscribes.map(({ codes }) => (
        codes.map(({ id, code, origin, status}) => (
          <Code
            key={id}
            id={id}
            code={code}
            origin={origin}
            status={status}
          />
        ))
      ))}
    </>
  )
}
