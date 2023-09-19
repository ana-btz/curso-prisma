import db from "./database/database";

(async () => {
  const post = await prisma.posts.findMany();
  console.log("Posts encontrados no banco:", posts);
})();