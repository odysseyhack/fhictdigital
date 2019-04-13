export default (sequelize, DataTypes) => {
  return sequelize.define('persona', {
    personaId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  })
}