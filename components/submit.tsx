"use client"
import { useFormStatus } from "react-dom";

 
// Don't use redux for things that need to be scoped in its state
export function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending} className="px-12 py-4 rounded bg-primary">{pending ? "Submitting..." : "Submit"}</button>
}
