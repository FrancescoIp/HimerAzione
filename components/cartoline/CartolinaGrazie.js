import ButtonA from "../buttons/customButtonA";

export default function CartolinaGrazie({ type, btnClass }) {
  const classToUse =
    type === "footer" ? "thankYou-body_footer" : "thankYou-body";

  return (
    <div className={classToUse}>
      <ButtonA className={btnClass} title="Thank you!"></ButtonA>
    </div>
  );
}
