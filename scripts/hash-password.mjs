// Generate the bcrypt hash for the single admin password.
//   pnpm hash-password 'your-strong-password'
// Copy the printed hash into ADMIN_PASSWORD_HASH in .env.local.
import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error("Usage: pnpm hash-password '<password>'");
  process.exit(1);
}

console.log(bcrypt.hashSync(password, 10));
