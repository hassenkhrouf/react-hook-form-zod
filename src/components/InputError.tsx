import type { FieldError } from "react-hook-form";

export default function InputError({
  error,
}: {
  error: FieldError | undefined;
}) {
  return (
    error && (
      <span style={{ color: "red", fontSize: "12px" }}>{error.message}</span>
    )
  );
}
