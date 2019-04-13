export default (sequelize, DataTypes) => {
  return sequelize.define('persona_category', {
    personaCategoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}