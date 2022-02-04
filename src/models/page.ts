import { Optional, Model, DataTypes } from 'sequelize';
import { getDefaultModelBaseOpt, ModelBase } from './modelBase';

interface PageAttributes extends ModelBase {
  url: string;
  isFav: boolean;
  isChecked: boolean;
  title?: string;
  description?: string;
}

interface PageCreationAttributes
  extends Optional<PageAttributes, 'description' | 'title'> {}

class Page
  extends Model<PageAttributes, PageCreationAttributes>
  implements PageAttributes
{
  id!: number;
  url!: string;
  isFav!: boolean;
  isChecked!: boolean;
  title?: string;
  description?: string;
  readonly createdAt?: Date;
  readonly pdatedAt?: Date;
  readonly eletedAt?: Date;
}

const initAttr = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  isFav: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isChecked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  title: {
    type: new DataTypes.STRING(128),
  },
  description: {
    type: new DataTypes.STRING(128),
  },
};

Page.init(initAttr, getDefaultModelBaseOpt());

export default Page;
