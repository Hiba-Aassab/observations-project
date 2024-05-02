-- CreateTable
CREATE TABLE `Zone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `leaderFullName` VARCHAR(191) NOT NULL,
    `eNumberLeader` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Observations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeFirstName` VARCHAR(191) NOT NULL,
    `employeeLastName` VARCHAR(191) NOT NULL,
    `employeeEnumber` VARCHAR(191) NOT NULL,
    `employeeFunctionality` VARCHAR(191) NOT NULL,
    `employeeZone` INTEGER NOT NULL,
    `nameLeaderEmployeeZone` VARCHAR(191) NOT NULL,
    `observationZone` INTEGER NOT NULL,
    `nameLeaderObservationZone` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `suggestion` VARCHAR(191) NOT NULL,
    `adminCommentaire` VARCHAR(191) NOT NULL,
    `isAccepted` BOOLEAN NOT NULL DEFAULT false,
    `isResolved` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Observations` ADD CONSTRAINT `Observations_employeeZone_fkey` FOREIGN KEY (`employeeZone`) REFERENCES `Zone`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Observations` ADD CONSTRAINT `Observations_observationZone_fkey` FOREIGN KEY (`observationZone`) REFERENCES `Zone`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO User VALUES