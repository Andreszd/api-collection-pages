import sequelizeConnection from '../config/db';

export interface ModelBase {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const getDefaultModelBaseOpt = () => {
  return {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  };
};
