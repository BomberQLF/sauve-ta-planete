import { Ice } from "./Ice";
import { Penguin } from "./Penguin";

export function Glacier({ unmeltIce }) {
  return (
    <>
      <Ice unmeltIce={unmeltIce} />
      <Penguin unmeltIce={unmeltIce} />
    </>
  );
}
