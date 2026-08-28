import { useState, type ReactNode } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappLink } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  organization: z.string().trim().max(120).optional(),
  role: z.string().trim().max(120).optional(),
  contact: z
    .string()
    .trim()
    .min(5, "Please enter an email or phone number")
    .max(160),
  purpose: z.string().trim().min(5, "Please add a brief purpose").max(1000),
});

type Props = {
  trigger: ReactNode;
  title: string;
  description: string;
  purposeLabel: string;
  purposePlaceholder: string;
  intent: string;
};

export function EnquiryDialog({
  trigger,
  title,
  description,
  purposeLabel,
  purposePlaceholder,
  intent,
}: Props) {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setError(null);
    const v = result.data;
    const message = [
      `Hello WIV — ${intent}`,
      `Name: ${v.name}`,
      v.organization ? `Organization: ${v.organization}` : null,
      v.role ? `Role: ${v.role}` : null,
      `Contact: ${v.contact}`,
      `Purpose: ${v.purpose}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <Dialog onOpenChange={() => { setError(null); setSent(false); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto rounded-3xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={onSubmit}
          name={intent}
          data-netlify="true"
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor={`${intent}-name`}>Full name</Label>
            <Input id={`${intent}-name`} name="name" maxLength={100} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${intent}-org`}>Organization / Institution</Label>
            <Input id={`${intent}-org`} name="organization" maxLength={120} />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${intent}-role`}>Role / Position</Label>
            <Input id={`${intent}-role`} name="role" maxLength={120} />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${intent}-contact`}>Email or phone number</Label>
            <Input id={`${intent}-contact`} name="contact" maxLength={160} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${intent}-purpose`}>{purposeLabel}</Label>
            <Textarea
              id={`${intent}-purpose`}
              name="purpose"
              rows={3}
              maxLength={1000}
              placeholder={purposePlaceholder}
              required
            />
          </div>
          {error ? (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="text-sm text-muted-foreground" role="status">
              Thank you — your message is ready in WhatsApp. Send it and we will
              respond shortly.
            </p>
          ) : null}
          <Button type="submit" className="w-full rounded-full">
            Send via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
