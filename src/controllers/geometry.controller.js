const GeometryService = require("../services/geometry.service");

class GeometryController {
  async createGeometry(req, res) {
    const { geometryData, attributeValues } = req.body;

    try {
      const createdGeometry = await GeometryService.createGeometry(
        geometryData,
        attributeValues
      );
      return res.status(201).json({ success: true, data: createdGeometry });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

  async getAllGeometries(req, res) {
    try {
      const geometries = await GeometryService.getAllGeometries();
      return res.status(200).json({ success: 'true', data: geometries });
    } catch (error) {
      return res.status(500).json({ success: 'false', error: "Internal server error" });
    }
  }

  async getGeometryByLayerId(req, res) {
    const { id } = req.params;
    try {
      const geometries = await GeometryService.getGeometryByLayerId(id);
      return res.status(200).json({ success: 'true', data: geometries });
    } catch (error) {
      return res.status(500).json({ success: 'false', error: "Internal server error" });
    }
  }

  async deleteGeometry(req, res) {
    const { id } = req.params;
    try {
      const deletedGeometry = await GeometryService.deleteGeometry(id);
      if (!deletedGeometry) {
        return res.status(404).json({ success: 'false', error: "Geometry not found" });
      }
      return res.status(204).json({ success: 'true', message: "Geometry deleted" });
    } catch (error) {
      return res.status(500).json({ success: 'false', error: "Internal server error" });
    }
  }

  async getAttributeValuesByGeometryId(req, res) {
    const { id } = req.params;
    try {
      const attributeValues = await GeometryService.getAttributeValuesByGeometryId(id);
      return res.status(200).json({ success: true, data: attributeValues });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
}

module.exports = new GeometryController();
