import FoxLogo from "./fox.svg"
import Image from "next/image"

interface Props extends React.ComponentPropsWithoutRef<"svg"> {}

export const Fox: React.FC<Props> = (props: Props) => {
  return <Image src={FoxLogo} alt="Fox logo" />
}
