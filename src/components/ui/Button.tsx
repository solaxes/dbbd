import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  outline: "btn btn-outline",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  href?: never;
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  href: string;
};

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
