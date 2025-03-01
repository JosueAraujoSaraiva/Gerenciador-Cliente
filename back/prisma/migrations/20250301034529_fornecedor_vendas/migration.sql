-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "telefone" SET DATA TYPE VARCHAR(15);

-- CreateTable
CREATE TABLE "Fornecedores" (
    "id_fornecedor" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,

    CONSTRAINT "Fornecedores_pkey" PRIMARY KEY ("id_fornecedor","cnpj")
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id_estoque" SERIAL NOT NULL,
    "quantAtual" INTEGER NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id_estoque")
);
