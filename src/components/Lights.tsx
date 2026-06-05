export function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[-3, 0, 0]} intensity={1} />
      <directionalLight position={[3, 0, 0]} intensity={1} />
      <directionalLight position={[0, 3, 0]} intensity={0.5} />
      <directionalLight position={[0, -3, 0]} intensity={0.5} />
    </>
  );
}
