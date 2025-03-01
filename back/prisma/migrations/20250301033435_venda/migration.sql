-- CreateTable
CREATE TABLE "Venda" (
    "id_venda" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id_venda")
);
