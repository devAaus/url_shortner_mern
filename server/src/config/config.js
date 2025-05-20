export const cookieOptions = {
   httpOnly: true,
   secure: process.env.NODE_ENV === "production", // Send only over HTTPS in prod
   sameSite: "strict",
   maxAge: 60 * 60 * 1000, // 1 hour in ms
};
