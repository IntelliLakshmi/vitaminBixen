interface FieldValidationWarningProps {
  text?: string;
}

const defaultWarningText = " Udfyld venligst dette felt";

export default function FieldValidationWarning({
  text = defaultWarningText,
}: FieldValidationWarningProps) {
  return <span className="textSizeSmall red">{text}</span>;
}
