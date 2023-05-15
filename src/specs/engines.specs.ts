//# Engines router specification

/**
 * @swagger
 *
 * components:
 *  schemas:
 *      Engine:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              fuel:
 *                  type: string
 *              horsePowers:
 *                  type: number
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *
 *
 *      EngineCreate:
 *          type: object
 *          properties:
 *              fuel:
 *                  type: string
 *              horsePowers:
 *                  type: number
 *
 *      EngineUpdate:
 *          type: object
 *          properties:
 *              fuel:
 *                  type: string
 *              horsePowers:
 *                  type: string
 */

/**
 * @swagger
 *
 * /engines:
 *      get:
 *          responses:
 *              200:
 *                  description: Paginated list of Engines.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Engine'
 *          tags:
 *              - engines
 *      post:
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref:  '#/components/schemas/EngineCreate'
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Engine'
 *          tags:
 *              - engines
 *
 * /engines/{id}:
 *      get:
 *          parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *             type: string
 *             format: uuid
 *          responses:
 *              200:
 *                  description: Single engine.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Engine'
 *              404:
 *                  description: Engine not found.
 *          tags:
 *              - engines
 *
 *      put:
 *          parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *              format: uuid
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/EngineUpdate'
 *          responses:
 *              201:
 *                  description: Engine car.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Engine'
 *              400:
 *                  description: Validation failed.
 *              404:
 *                  description: Engine not found.
 *          tags:
 *              - engines
 *
 *      delete:
 *          parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *              format: uuid
 *          responses:
 *              200:
 *                  description: Engine deleted.
 *              404:
 *                  description: Engine not found.
 *          tags:
 *              - engines
 */
