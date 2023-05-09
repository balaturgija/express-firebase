//# Cars router specification

/**
 * @swagger
 *
 * components:
 *  schemas:
 *      Car:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              brand:
 *                  type: string
 *              model:
 *                  type: string
 *              engine:
 *                  type: string
 *
 *      CarCreate:
 *          type: object
 *          properties:
 *              brand:
 *                  type: string
 *              model:
 *                  type: string
 *              engine:
 *                  type: string
 *
 *      CarUpdate:
 *          type: object
 *          properties:
 *              brand:
 *                  type: string
 *              model:
 *                  type: string
 *              engine:
 *                  type: string
 */

/**
 * @swagger
 *
 * /cars:
 *      get:
 *          responses:
 *              200:
 *                  description: List of cars.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 *          tags:
 *              - cars
 *      post:
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref:  '#/components/schemas/CarCreate'
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 *          tags:
 *              - cars
 *
 * /cars/{id}:
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
 *                  description: Single car.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 *              404:
 *                  description: Car not found.
 *          tags:
 *              - cars
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
 *                          $ref: '#/components/schemas/Car'
 *          responses:
 *              201:
 *                  description: Single car.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 *              400:
 *                  description: Validation failed.
 *              404:
 *                  description: Car not found.
 *          tags:
 *              - cars
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
 *                  description: Car deleted.
 *              404:
 *                  description: Car not found.
 *          tags:
 *              - cars
 */
