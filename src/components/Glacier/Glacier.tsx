import { Ice } from "./Ice";
import { Penguin } from "./Penguin";
import { PolarBear } from "./PolarBear";

export function Glacier({
  unmeltIce,
  addAnimals,
}: {
  unmeltIce: boolean;
  addAnimals: boolean;
}) {
  return (
    <>
      <Ice unmeltIce={unmeltIce} />
      <Penguin unmeltIce={unmeltIce} addAnimals={addAnimals} />
      <PolarBear unmeltIce={unmeltIce} addAnimals={addAnimals} />
    </>
  );
}
