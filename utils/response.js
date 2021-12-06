/**
 * @swagger
 * components:
 *   schemas:
 *     GeneralSuccess:
 *      type: object
 *      description: General Success
 *      properties:
 *        success:
 *          type: boolean
 *        data:
 *          type: object
 */

/**
 * @swagger
 * components:
 *   responses:
 *     GeneralSuccess:
 *      description: General Success
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GeneralSuccess'
 */
export function successResponse(res, data = null, status = 200) {
  return res.status(status).json({ success: true, data })
}
