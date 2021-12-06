/**
 * @swagger
 * /main:
 *  get:
 *    summary: Process text
 *    security: []
 *    tags:
 *      - Main
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              text:
 *                type: string
 *                description: Text to process
 *                example: 'This is a text'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/GeneralSuccess'
 */
