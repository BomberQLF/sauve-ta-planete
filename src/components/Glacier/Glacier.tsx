import { Ice } from "./Ice";
import { Penguin } from "./Penguin";

export function Glacier({ unmeltIce }: { unmeltIce: boolean }) {
  return (
    <>
      <Ice unmeltIce={unmeltIce} />
      <Penguin unmeltIce={unmeltIce} />
    </>
  );
}
