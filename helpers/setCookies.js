import nookies from "nookies";

export default function setCookies(ctx, userId) {
  nookies.set(ctx, "user", userId, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
}
