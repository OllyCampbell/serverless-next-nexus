# Migration `20200526122502-init`

This migration has been generated by Olly Campbell at 5/26/2020, 12:25:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `nexus-test`.`World` (
`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191) NOT NULL  ,`population` Decimal(65,30) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `World.name` ON `nexus-test`.`World`(`name`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200526122502-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+datasource db {
+  provider = "mysql"
+  url      = env("DATABASE_URL")
+}
+
+generator prisma_client {
+  provider = "prisma-client-js"
+}
+     
+model World {
+  id         Int    @id @default(autoincrement())
+  name       String @unique
+  population Float
+}
```


