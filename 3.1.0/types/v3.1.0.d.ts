/**
 * This is the root object of the OpenAPI document.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#openapi-object
 */
export interface OpenAPIObject {
    /**
     * REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI document. This is not related to the API info.version string.
     */
    openapi: string;

    /**
     * REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required.
     */
    info: InfoObject;

    /**
     * The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI.
     */
    jsonSchemaDialect?: string;

    /**
     * An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.
     */
    servers?: ServerObject[];

    /**
     * The available paths and operations for the API.
     */
    paths: PathsObject;

    /**
     * The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement. Closely related to the callbacks feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses.
     */
    webhooks?: { [webhook: string]: PathItemObject | ReferenceObject };

    /**
     * An element to hold various schemas for the document.
     */
    components?: ComponentsObject;

    /**
     * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.
     */
    security?: SecurityRequirementObject[];

    /**
     * A list of tags used by the document with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools’ logic. Each tag name in the list MUST be unique.
     */
    tags?: TagObject[];

    /**
     * Additional external documentation.
     */
    externalDocs?: ExternalDocumentationObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 * 
 * @example 
 * {
        "title": "Sample Pet Store App",
        "summary": "A pet store manager.",
        "description": "This is a sample server for a pet store.",
        "termsOfService": "https://example.com/terms/",
        "contact": {
            "name": "API Support",
            "url": "https://www.example.com/support",
            "email": "support@example.com"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "1.0.1"
   }
 */
export interface InfoObject {
    /**
     * REQUIRED. The title of the API.
     */
    title: string;
    /**
     * A short summary of the API.
     */
    summary?: string;
    /**
     * A description of the API. CommonMark (https://spec.openapis.org/oas/v3.1.0.html#bib-commonmark) syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     */
    contact?: ContactObject;
    /**
     * The license information for the exposed API.
     */
    license?: LicenseObject;
    /**
     * REQUIRED. The version of the OpenAPI document (which is distinct from the OpenAPI Specification version (https://spec.openapis.org/oas/v3.1.0.html#oasVersion) or the API implementation version).
     */
    version: string;
    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Contact information for the exposed API.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#contact-object
 * @example
 * {
 *   "name": "API Support",
 *   "url": "https://www.example.com/support",
 *   "email": "support@example.com"
 * }
 */
export interface ContactObject {
    /**
     * The identifying name of the contact person/organization.
     */
    name?: string;

    /**
     * The URL pointing to the contact information. This MUST be in the form of a URL.
     */
    url?: string;

    /**
     * The email address of the contact person/organization. This MUST be in the form of an email address.
     */
    email?: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * License information for the exposed API.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#license-object
 * @example
 * {
 *   "name": "Apache 2.0",
 *   "identifier": "Apache-2.0"
 * }
 */
export interface LicenseObject {
    /**
     * REQUIRED. The license name used for the API.
     */
    name: string;

    /**
     * An [SPDX-Licenses] expression for the API. The identifier field is mutually exclusive of the url field.
     */
    identifier?: string;

    /**
     * A URL to the license used for the API. This MUST be in the form of a URL. The url field is mutually exclusive of the identifier field.
     */
    url?: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * An object representing a Server.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#server-object
 * @example
 * {
 *   "url": "https://development.gigantic-server.com/v1",
 *   "description": "Development server"
 * }
 *
 * @example
 * {
 *   "url": "https://{username}.gigantic-server.com:{port}/{basePath}",
 *   "description": "The production API server",
 *   "variables": {
 *     "username": {
 *       "default": "demo",
 *       "description": "this value is assigned by the service provider, in this example `gigantic-server.com`"
 *     },
 *     "port": {
 *       "enum": ["8443", "443"],
 *       "default": "8443"
 *     },
 *     "basePath": {
 *       "default": "v2"
 *     }
 *   }
 * }
 */
export interface ServerObject {
    /**
     * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.
     */
    url: string;

    /**
     * An optional string describing the host designated by the URL. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A map between a variable name and its value. The value is used for substitution in the server’s URL template.
     */
    variables?: { [variable: string]: ServerVariableObject };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#server-variable-object
 */
export interface ServerVariableObject {
    /**
     * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
     */
    enum?: string[];

    /**
     * REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. Note this behavior is different than the Schema Object’s treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value MUST exist in the enum’s values.
     */
    default: string;

    /**
     * An optional description for the server variable. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to Access Control List (ACL) constraints.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#paths-object
 * @example
 * {
 *   "/pets": {
 *     "get": {
 *       "description": "Returns all pets from the system that the user has access to",
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets.",
 *           "content": {
 *             "application/json": {
 *               "schema": {
 *                 "type": "array",
 *                 "items": {
 *                   "$ref": "#/components/schemas/pet"
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface PathsObject {
    /**
     * A relative path to an individual endpoint. The field name MUST begin with a forward slash (/). The path is appended (no relative URL resolution) to the expanded URL from the Server Object’s url field in order to construct the full URL. Path templating is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it’s up to the tooling to decide which one to use.
     */
    [path: `/${string}`]: PathItemObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#path-item-object
 * @example
 * {
 *   "get": {
 *     "description": "Returns pets based on ID",
 *     "summary": "Find pets by ID",
 *     "operationId": "getPetsById",
 *     "responses": {
 *       "200": {
 *         "description": "pet response",
 *         "content": {
 *           "*\/*": {
 *             "schema": {
 *               "type": "array",
 *               "items": {
 *                 "$ref": "#/components/schemas/Pet"
 *               }
 *             }
 *           }
 *         }
 *       },
 *       "default": {
 *         "description": "error payload",
 *         "content": {
 *           "text/html": {
 *             "schema": {
 *               "$ref": "#/components/schemas/ErrorModel"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   },
 *   "parameters": [
 *     {
 *       "name": "id",
 *       "in": "path",
 *       "description": "ID of pet to use",
 *       "required": true,
 *       "schema": {
 *         "type": "array",
 *         "items": {
 *           "type": "string"
 *         }
 *       },
 *       "style": "simple"
 *     }
 *   ]
 * }
 */
export interface PathItemObject {
    /**
     * Allows for a referenced definition of this path item. The referenced structure MUST be in the form of a Path Item Object. In case a Path Item Object field appears both in the defined object and the referenced object, the behavior is undefined. See the rules for resolving Relative References.
     */
    $ref?: string;

    /**
     * An optional, string summary, intended to apply to all operations in this path.
     */
    summary?: string;

    /**
     * An optional, string description, intended to apply to all operations in this path. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A definition of a GET operation on this path.
     */
    get?: OperationObject;

    /**
     * A definition of a PUT operation on this path.
     */
    put?: OperationObject;

    /**
     * A definition of a POST operation on this path.
     */
    post?: OperationObject;

    /**
     * A definition of a DELETE operation on this path.
     */
    delete?: OperationObject;

    /**
     * A definition of a OPTIONS operation on this path.
     */
    options?: OperationObject;

    /**
     * A definition of a HEAD operation on this path.
     */
    head?: OperationObject;

    /**
     * A definition of a PATCH operation on this path.
     */
    patch?: OperationObject;

    /**
     * A definition of a TRACE operation on this path.
     */
    trace?: OperationObject;

    /**
     * An alternative server array to service all operations in this path.
     */
    servers?: ServerObject[];

    /**
     * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object’s components/parameters.
     */
    parameters?: Array<ParameterObject | ReferenceObject>;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Describes a single API operation on a path.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#operation-object
 * @example
 * {
 *   "tags": [
 *     "pet"
 *   ],
 *   "summary": "Updates a pet in the store with form data",
 *   "operationId": "updatePetWithForm",
 *   "parameters": [
 *     {
 *       "name": "petId",
 *       "in": "path",
 *       "description": "ID of pet that needs to be updated",
 *       "required": true,
 *       "schema": {
 *         "type": "string"
 *       }
 *     }
 *   ],
 *   "requestBody": {
 *     "content": {
 *       "application/x-www-form-urlencoded": {
 *         "schema": {
 *           "type": "object",
 *           "properties": {
 *             "name": {
 *               "description": "Updated name of the pet",
 *               "type": "string"
 *             },
 *             "status": {
 *               "description": "Updated status of the pet",
 *               "type": "string"
 *             }
 *           },
 *           "required": ["status"]
 *         }
 *       }
 *     }
 *   },
 *   "responses": {
 *     "200": {
 *       "description": "Pet updated.",
 *       "content": {
 *         "application/json": {},
 *         "application/xml": {}
 *       }
 *     },
 *     "405": {
 *       "description": "Method Not Allowed",
 *       "content": {
 *         "application/json": {},
 *         "application/xml": {}
 *       }
 *     }
 *   },
 *   "security": [
 *     {
 *       "petstore_auth": [
 *         "write:pets",
 *         "read:pets"
 *       ]
 *     }
 *   ]
 * }
 */
export interface OperationObject {
    /**
     * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
     */
    tags?: string[];

    /**
     * A short summary of what the operation does.
     */
    summary?: string;

    /**
     * A verbose explanation of the operation behavior. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Additional external documentation for this operation.
     */
    externalDocs?: ExternalDocumentationObject;

    /**
     * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
     */
    operationId?: string;

    /**
     * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object’s components/parameters.
     */
    parameters?: Array<ParameterObject | ReferenceObject>;

    /**
     * The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the HTTP 1.1 specification [RFC7231] Section 4.3.1 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague (such as GET, HEAD and DELETE), requestBody is permitted but does not have well-defined semantics and SHOULD be avoided if possible.
     */
    requestBody?: RequestBodyObject | ReferenceObject;

    /**
     * The list of possible responses as they are returned from executing this operation.
     */
    responses: ResponsesObject;

    /**
     * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.
     */
    callbacks?: { [callback: string]: CallbackObject | ReferenceObject };

    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
     */
    deprecated?: boolean;

    /**
     * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.
     */
    security?: SecurityRequirementObject[];

    /**
     * An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.
     */
    servers?: ServerObject[];

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Allows referencing an external resource for extended documentation.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#external-documentation-object
 * @example
 * {
 *   "description": "Find more info here",
 *   "url": "https://example.com"
 * }
 */
export interface ExternalDocumentationObject {
    /**
     * A description of the target documentation. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * REQUIRED. The URL for the target documentation. This MUST be in the form of a URL.
     */
    url: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Describes a single operation parameter.
 *
 * A unique parameter is defined by a combination of a name and location.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#parameter-object
 * @example
 * // A header parameter with an array of 64 bit integer numbers:
 * {
 *   "name": "token",
 *   "in": "header",
 *   "description": "token to be passed as a header",
 *   "required": true,
 *   "schema": {
 *     "type": "array",
 *     "items": {
 *       "type": "integer",
 *       "format": "int64"
 *     }
 *   },
 *   "style": "simple"
 * }
 *
 * @example
 * // A path parameter of a string value:
 * {
 *   "name": "username",
 *   "in": "path",
 *   "description": "username to fetch",
 *   "required": true,
 *   "schema": {
 *     "type": "string"
 *   }
 * }
 *
 * @example
 * // An optional query parameter of a string value, allowing multiple values by repeating the query parameter:
 * {
 *   "name": "id",
 *   "in": "query",
 *   "description": "ID of the object to fetch",
 *   "required": false,
 *   "schema": {
 *     "type": "array",
 *     "items": {
 *       "type": "string"
 *     }
 *   },
 *   "style": "form",
 *   "explode": true
 * }
 *
 * @example
 * // A free-form query parameter, allowing undefined parameters of a specific type:
 * {
 *   "in": "query",
 *   "name": "freeForm",
 *   "schema": {
 *     "type": "object",
 *     "additionalProperties": {
 *       "type": "integer"
 *     }
 *   },
 *   "style": "form"
 * }
 *
 * @example
 * // A complex parameter using content to define serialization:
 * {
 *   "in": "query",
 *   "name": "coordinates",
 *   "content": {
 *     "application/json": {
 *       "schema": {
 *         "type": "object",
 *         "required": ["lat", "long"],
 *         "properties": {
 *           "lat": { "type": "number" },
 *           "long": { "type": "number" }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface ParameterObject {
    /**
     * REQUIRED. The name of the parameter. Parameter names are case sensitive.
     */
    name: string;

    /**
     * REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".
     */
    in: "query" | "header" | "path" | "cookie";

    /**
     * A brief description of the parameter. This could contain examples of use. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.
     */
    required?: boolean;

    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;

    /**
     * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     */
    style?: string;

    /**
     * When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
     */
    explode?: boolean;

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986] Section 2.2 :/?#[]@!$&'()*+,;= to be included without percent-encoding. This property only applies to parameters with an in value of query. The default value is false.
     */
    allowReserved?: boolean;

    /**
     * The schema defining the type used for the parameter.
     */
    schema?: SchemaObject;

    /**
     * Example of the parameter’s potential value. The example SHOULD match the specified schema and encoding properties if present. The example field is mutually exclusive of the examples field.
     */
    example?: any;

    /**
     * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field.
     */
    examples?: { [media: string]: ExampleObject | ReferenceObject };

    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
     */
    content?: { [media: string]: MediaTypeObject };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

export interface SchemaObject {
    $id?: string;
    $schema?: string;
    $ref?: string;
    title?: string;
    description?: string;
    type?: string | string[];
    format?: string;
    default?: any;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: any[];
    allOf?: SchemaObject[];
    oneOf?: SchemaObject[];
    anyOf?: SchemaObject[];
    not?: SchemaObject;
    items?: SchemaObject | SchemaObject[];
    properties?: { [property: string]: SchemaObject };
    additionalProperties?: boolean | SchemaObject;
    patternProperties?: { [pattern: string]: SchemaObject };
    dependencies?: { [key: string]: SchemaObject | string[] };
    const?: any;
    examples?: any[];
    discriminator?: DiscriminatorObject;
    xml?: XMLObject;
    externalDocs?: ExternalDocumentationObject;
    example?: any;
    [extension: `x-${string}`]: any;
    [key: string]: any;
}

/**
 * When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#discriminator-object
 * @example
 * {
 *   "propertyName": "petType"
 * }
 *
 * {
 *   "propertyName": "petType",
 *   "mapping": {
 *     "dog": "#/components/schemas/Dog",
 *     "monster": "https://gigantic-server.com/schemas/Monster/schema.json"
 *   }
 * }
 */
export interface DiscriminatorObject {
    /**
     * REQUIRED. The name of the property in the payload that will hold the discriminator value.
     */
    propertyName: string;

    /**
     * An object to hold mappings between payload values and schema names or references.
     */
    mapping?: { [key: string]: string };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#xml-object
 * @example
 * {
 *   "name": "animal"
 * }
 *
 * {
 *   "attribute": true
 * }
 *
 * {
 *   "namespace": "https://example.com/schema/sample",
 *   "prefix": "sample"
 * }
 *
 * {
 *   "name": "aliens",
 *   "wrapped": true
 * }
 */
export interface XMLObject {
    /**
     * Replaces the name of the element/attribute used for the described schema property.
     */
    name?: string;

    /**
     * The URI of the namespace definition. This MUST be in the form of an absolute URI.
     */
    namespace?: string;

    /**
     * The prefix to be used for the name.
     */
    prefix?: string;

    /**
     * Declares whether the property definition translates to an attribute instead of an element. Default value is false.
     */
    attribute?: boolean;

    /**
     * MAY be used only for an array definition. Signifies whether the array is wrapped. Default value is false.
     */
    wrapped?: boolean;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Example Object
 *
 * @see https://spec.openapis.org/oas/v3.1.0#example-object
 * @example
 * {
 *   "summary": "A foo example",
 *   "value": {"foo": "bar"}
 * }
 *
 * {
 *   "summary": "This is an example in XML",
 *   "externalValue": "https://example.org/examples/address-example.xml"
 * }
 */
export interface ExampleObject {
    /**
     * Short description for the example.
     */
    summary?: string;

    /**
     * Long description for the example. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Embedded literal example. The value field and externalValue field are mutually exclusive.
     */
    value?: any;

    /**
     * A URI that points to the literal example. The value field and externalValue field are mutually exclusive.
     */
    externalValue?: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Reference Object
 *
 * A simple object to allow referencing other components in the OpenAPI document, internally and externally.
 *
 * The $ref string value contains a URI [RFC3986], which identifies the location of the value being referenced.
 *
 * See the rules for resolving Relative References.
 *
 * This object cannot be extended with additional properties and any properties added SHALL be ignored.
 *
 * Note that this restriction on additional properties is a difference between Reference Objects and Schema Objects that contain a $ref keyword.
 *
 * @example
 * {
 *   "$ref": "#/components/schemas/Pet"
 * }
 *
 * @example
 * {
 *   "$ref": "Pet.json"
 * }
 *
 * @example
 * {
 *   "$ref": "definitions.json#/Pet"
 * }
 */
export interface ReferenceObject {
    /**
     * REQUIRED. The reference identifier. This MUST be in the form of a URI.
     */
    $ref: string;

    /**
     * A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect.
     */
    summary?: string;

    /**
     * A description which by default SHOULD override that of the referenced component. [CommonMark] syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect.
     */
    description?: string;
}

/**
 * Media Type Object
 *
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#media-type-object
 *
 * @example
 * {
 *   "application/json": {
 *     "schema": {
 *       "$ref": "#/components/schemas/Pet"
 *     },
 *     "examples": {
 *       "cat": {
 *         "summary": "An example of a cat",
 *         "value": {
 *           "name": "Fluffy",
 *           "petType": "Cat",
 *           "color": "White",
 *           "gender": "male",
 *           "breed": "Persian"
 *         }
 *       },
 *       "dog": {
 *         "summary": "An example of a dog with a cat's name",
 *         "value": {
 *           "name": "Puma",
 *           "petType": "Dog",
 *           "color": "Black",
 *           "gender": "Female",
 *           "breed": "Mixed"
 *         }
 *       },
 *       "frog": {
 *         "$ref": "#/components/examples/frog-example"
 *       }
 *     }
 *   }
 * }
 */
export interface MediaTypeObject {
    /**
     * The schema defining the content of the request, response, or parameter.
     */
    schema?: SchemaObject | ReferenceObject;

    /**
     * Example of the media type. The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.
     */
    example?: any;

    /**
     * Examples of the media type. Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.
     */
    examples?: { [key: string]: ExampleObject | ReferenceObject };

    /**
     * A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
     */
    encoding?: { [property: string]: EncodingObject };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Encoding Object
 *
 * A single encoding definition applied to a single schema property.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#encoding-object
 */
export interface EncodingObject {
    /**
     * The Content-Type for encoding a specific property. Default value depends on the property type: for object - application/json; for array – the default is defined based on the inner type; for all other cases the default is application/octet-stream. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.
     */
    contentType?: string;

    /**
     * A map allowing additional information to be provided as headers, for example Content-Disposition. Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.
     */
    headers?: { [header: string]: HeaderObject | ReferenceObject };

    /**
     * Describes how a specific property value will be serialized depending on its type. See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
     */
    style?: string;

    /**
     * When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
     */
    explode?: boolean;

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986] Section 2.2 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
     */
    allowReserved?: boolean;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Header Object
 *
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * - name MUST NOT be specified, it is given in the corresponding headers map.
 * - in MUST NOT be specified, it is implicitly in header.
 * - All traits that are affected by the location MUST be applicable to a location of header (for example, style).
 *
 * @see https://spec.openapis.org/oas/v3.1.0#header-object
 *
 * @example
 * {
 *   "description": "The number of allowed requests in the current period",
 *   "schema": {
 *     "type": "integer"
 *   }
 * }
 */
export interface HeaderObject {
    /**
     * A brief description of the header. This could contain examples of use. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * The schema defining the type used for the header.
     */
    schema?: SchemaObject | ReferenceObject;

    /**
     * Example of the header’s potential value. The example SHOULD match the specified schema and encoding properties if present. The example field is mutually exclusive of the examples field.
     */
    example?: any;

    /**
     * Examples of the header’s potential value. Each example SHOULD contain a value in the correct format as specified in the header encoding. The examples field is mutually exclusive of the example field.
     */
    examples?: { [media: string]: ExampleObject | ReferenceObject };

    /**
     * Describes how the header value will be serialized depending on its type.
     */
    style?: string;

    /**
     * When this is true, header values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
     */
    explode?: boolean;

    /**
     * Determines whether the header value SHOULD allow reserved characters, as defined by [RFC3986] Section 2.2 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false.
     */
    allowReserved?: boolean;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Request Body Object
 *
 * Describes a single request body.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#request-body-object
 *
 * @example
 * {
 *   "description": "user to add to the system",
 *   "content": {
 *     "application/json": {
 *       "schema": {
 *         "$ref": "#/components/schemas/User"
 *       },
 *       "examples": {
 *         "user": {
 *           "summary": "User Example",
 *           "externalValue": "https://foo.bar/examples/user-example.json"
 *         }
 *       }
 *     },
 *     "application/xml": {
 *       "schema": {
 *         "$ref": "#/components/schemas/User"
 *       },
 *       "examples": {
 *         "user": {
 *           "summary": "User example in XML",
 *           "externalValue": "https://foo.bar/examples/user-example.xml"
 *         }
 *       }
 *     },
 *     "text/plain": {
 *       "examples": {
 *         "user": {
 *           "summary": "User example in Plain text",
 *           "externalValue": "https://foo.bar/examples/user-example.txt"
 *         }
 *       }
 *     },
 *     "*\/*": {
 *       "examples": {
 *         "user": {
 *           "summary": "User example in other format",
 *           "externalValue": "https://foo.bar/examples/user-example.whatever"
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * {
 *   "description": "user to add to the system",
 *   "required": true,
 *   "content": {
 *     "text/plain": {
 *       "schema": {
 *         "type": "array",
 *         "items": {
 *           "type": "string"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface RequestBodyObject {
    /**
     * A brief description of the request body. This could contain examples of use. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * REQUIRED. The content of the request body. The key is a media type or media type range, and the value describes it. For requests that match multiple keys, only the most specific key is applicable.
     */
    content: { [media: string]: MediaTypeObject };

    /**
     * Determines if the request body is required in the request. Defaults to false.
     */
    required?: boolean;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Responses Object
 *
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes that are not covered individually by the Responses Object.
 *
 * The Responses Object MUST contain at least one response code, and if only one response code is provided it SHOULD be the response for a successful operation call.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#responses-object
 */
export interface ResponsesObject {
    /**
     * The documentation of responses other than the ones declared for specific HTTP response codes. Use this field to cover undeclared responses.
     */
    default?: ResponseObject | ReferenceObject;

    /**
     * Any HTTP status code can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code. This field MUST be enclosed in quotation marks (for example, "200") for compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase wildcard character X. For example, 2XX represents all response codes between [200-299]. Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code.
     */
    [statusCode: string]: ResponseObject | ReferenceObject | undefined;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Response Object
 *
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#response-object
 *
 * @example
 * {
 *   "description": "A complex object array response",
 *   "content": {
 *     "application/json": {
 *       "schema": {
 *         "type": "array",
 *         "items": {
 *           "$ref": "#/components/schemas/VeryComplexType"
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * {
 *   "description": "A simple string response",
 *   "content": {
 *     "text/plain": {
 *       "schema": {
 *         "type": "string"
 *       }
 *     }
 *   }
 * }
 *
 * {
 *   "description": "A simple string response",
 *   "content": {
 *     "text/plain": {
 *       "schema": {
 *         "type": "string",
 *         "example": "whoa!"
 *       }
 *     }
 *   },
 *   "headers": {
 *     "X-Rate-Limit-Limit": {
 *       "description": "The number of allowed requests in the current period",
 *       "schema": {
 *         "type": "integer"
 *       }
 *     },
 *     "X-Rate-Limit-Remaining": {
 *       "description": "The number of remaining requests in the current period",
 *       "schema": {
 *         "type": "integer"
 *       }
 *     },
 *     "X-Rate-Limit-Reset": {
 *       "description": "The number of seconds left in the current period",
 *       "schema": {
 *         "type": "integer"
 *       }
 *     }
 *   }
 * }
 *
 * {
 *   "description": "object created"
 * }
 */
export interface ResponseObject {
    /**
     * REQUIRED. A description of the response. [CommonMark] syntax MAY be used for rich text representation.
     */
    description: string;

    /**
     * Maps a header name to its definition. Header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.
     */
    headers?: { [header: string]: HeaderObject | ReferenceObject };

    /**
     * A map containing descriptions of potential response payloads. The key is a media type or media type range, and the value describes it. For responses that match multiple keys, only the most specific key is applicable.
     */
    content?: { [media: string]: MediaTypeObject };

    /**
     * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
     */
    links?: { [link: string]: LinkObject | ReferenceObject };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Link Object
 *
 * The Link object represents a possible design-time link for a response. The presence of a link does not guarantee the caller’s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#link-object
 *
 * @example
 * {
 *   "operationId": "getUserAddress",
 *   "parameters": {
 *     "userId": "$request.path.id"
 *   }
 * }
 *
 * {
 *   "operationRef": "#/paths/~12.0~1repositories~1{username}/get",
 *   "parameters": {
 *     "username": "$response.body#/username"
 *   }
 * }
 *
 * {
 *   "operationId": "getUserAddressByUUID",
 *   "parameters": {
 *     "userUuid": "$response.body#/uuid"
 *   }
 * }
 */
export interface LinkObject {
    /**
     * A relative or absolute URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.
     */
    operationRef?: string;

    /**
     * The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field.
     */
    operationId?: string;

    /**
     * A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).
     */
    parameters?: { [parameter: string]: any };

    /**
     * A literal value or {expression} to use as a request body when calling the target operation.
     */
    requestBody?: any;

    /**
     * A description of the link. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A server object to be used by the target operation.
     */
    server?: ServerObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Callback Object
 *
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * To describe incoming requests from the API provider independent from another API call, use the webhooks field.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#callback-object
 *
 * @example
 * {
 *   "myCallback": {
 *     "{$request.query.queryUrl}": {
 *       "post": {
 *         "requestBody": {
 *           "description": "Callback payload",
 *           "content": {
 *             "application/json": {
 *               "schema": {
 *                 "$ref": "#/components/schemas/SomePayload"
 *               }
 *             }
 *           }
 *         },
 *         "responses": {
 *           "200": {
 *             "description": "callback successfully processed"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * {
 *   "transactionCallback": {
 *     "http://notificationServer.com?transactionId={$request.body#/id}&email={$request.body#/email}": {
 *       "post": {
 *         "requestBody": {
 *           "description": "Callback payload",
 *           "content": {
 *             "application/json": {
 *               "schema": {
 *                 "$ref": "#/components/schemas/SomePayload"
 *               }
 *             }
 *           }
 *         },
 *         "responses": {
 *           "200": {
 *             "description": "callback successfully processed"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface CallbackObject {
    /**
     * A Path Item Object, or a reference to one, used to define a callback request and expected responses. The key that identifies the Path Item Object is a runtime expression that can be evaluated in the context of a runtime HTTP request/response to identify the URL to be used for the callback request.
     */
    [expression: string | `x-${string}`]: PathItemObject | ReferenceObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Security Requirement Object
 *
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
 *
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
 *
 * When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#security-requirement-object
 *
 * @example
 * {
 *   "api_key": []
 * }
 *
 * {
 *   "petstore_auth": [
 *     "write:pets",
 *     "read:pets"
 *   ]
 * }
 *
 * {
 *   "security": [
 *     {},
 *     {
 *       "petstore_auth": [
 *         "write:pets",
 *         "read:pets"
 *       ]
 *     }
 *   ]
 * }
 */
export interface SecurityRequirementObject {
    /**
     * Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band.
     */
    [name: string]: string[];
}

/**
 * Components Object
 *
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#components-object
 *
 * @example
 * {
 *   "schemas": {
 *     "GeneralError": {
 *       "type": "object",
 *       "properties": {
 *         "code": {
 *           "type": "integer",
 *           "format": "int32"
 *         },
 *         "message": {
 *           "type": "string"
 *         }
 *       }
 *     },
 *     "Category": {
 *       "type": "object",
 *       "properties": {
 *         "id": {
 *           "type": "integer",
 *           "format": "int64"
 *         },
 *         "name": {
 *           "type": "string"
 *         }
 *       }
 *     },
 *     "Tag": {
 *       "type": "object",
 *       "properties": {
 *         "id": {
 *           "type": "integer",
 *           "format": "int64"
 *         },
 *         "name": {
 *           "type": "string"
 *         }
 *       }
 *     }
 *   },
 *   "parameters": {
 *     "skipParam": {
 *       "name": "skip",
 *       "in": "query",
 *       "description": "number of items to skip",
 *       "required": true,
 *       "schema": {
 *         "type": "integer",
 *         "format": "int32"
 *       }
 *     },
 *     "limitParam": {
 *       "name": "limit",
 *       "in": "query",
 *       "description": "max records to return",
 *       "required": true,
 *       "schema" : {
 *         "type": "integer",
 *         "format": "int32"
 *       }
 *     }
 *   },
 *   "responses": {
 *     "NotFound": {
 *       "description": "Entity not found."
 *     },
 *     "IllegalInput": {
 *       "description": "Illegal input for operation."
 *     },
 *     "GeneralError": {
 *       "description": "General Error",
 *       "content": {
 *         "application/json": {
 *           "schema": {
 *             "$ref": "#/components/schemas/GeneralError"
 *           }
 *         }
 *       }
 *     }
 *   },
 *   "securitySchemes": {
 *     "api_key": {
 *       "type": "apiKey",
 *       "name": "api_key",
 *       "in": "header"
 *     },
 *     "petstore_auth": {
 *       "type": "oauth2",
 *       "flows": {
 *         "implicit": {
 *           "authorizationUrl": "https://example.org/api/oauth/dialog",
 *           "scopes": {
 *             "write:pets": "modify pets in your account",
 *             "read:pets": "read your pets"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface ComponentsObject {
    /**
     * An object to hold reusable Schema Objects.
     */
    schemas?: { [key: string]: SchemaObject };

    /**
     * An object to hold reusable Response Objects.
     */
    responses?: { [key: string]: ResponseObject | ReferenceObject };

    /**
     * An object to hold reusable Parameter Objects.
     */
    parameters?: { [key: string]: ParameterObject | ReferenceObject };

    /**
     * An object to hold reusable Example Objects.
     */
    examples?: { [key: string]: ExampleObject | ReferenceObject };

    /**
     * An object to hold reusable Request Body Objects.
     */
    requestBodies?: { [key: string]: RequestBodyObject | ReferenceObject };

    /**
     * An object to hold reusable Header Objects.
     */
    headers?: { [key: string]: HeaderObject | ReferenceObject };

    /**
     * An object to hold reusable Security Scheme Objects.
     */
    securitySchemes?: { [key: string]: SecuritySchemeObject | ReferenceObject };

    /**
     * An object to hold reusable Link Objects.
     */
    links?: { [key: string]: LinkObject | ReferenceObject };

    /**
     * An object to hold reusable Callback Objects.
     */
    callbacks?: { [key: string]: CallbackObject | ReferenceObject };

    /**
     * An object to hold reusable Path Item Objects.
     */
    pathItems?: { [key: string]: PathItemObject | ReferenceObject };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Security Scheme Object
 *
 * Defines a security scheme that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), mutual TLS (use of a client certificate), OAuth2’s common flows (implicit, password, client credentials and authorization code), and OpenID Connect Discovery.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#security-scheme-object
 *
 * @example
 * {
 *   "type": "http",
 *   "scheme": "basic"
 * }
 *
 * {
 *   "type": "apiKey",
 *   "name": "api_key",
 *   "in": "header"
 * }
 *
 * {
 *   "type": "http",
 *   "scheme": "bearer",
 *   "bearerFormat": "JWT"
 * }
 *
 * {
 *   "type": "oauth2",
 *   "flows": {
 *     "implicit": {
 *       "authorizationUrl": "https://example.com/api/oauth/dialog",
 *       "scopes": {
 *         "write:pets": "modify pets in your account",
 *         "read:pets": "read your pets"
 *       }
 *     }
 *   }
 * }
 */
export interface SecuritySchemeObject {
    /**
     * REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect".
     */
    type: "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect";

    /**
     * A description for security scheme. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * REQUIRED for apiKey. The name of the header, query or cookie parameter to be used.
     */
    name?: string;

    /**
     * REQUIRED for apiKey. The location of the API key. Valid values are "query", "header" or "cookie".
     */
    in?: "query" | "header" | "cookie";

    /**
     * REQUIRED for http. The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235 Section 5.1. The values used SHOULD be registered in the IANA Authentication Scheme registry.
     */
    scheme?: string;

    /**
     * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
     */
    bearerFormat?: string;

    /**
     * REQUIRED for oauth2. An object containing configuration information for the flow types supported.
     */
    flows?: OAuthFlowsObject;

    /**
     * REQUIRED for openIdConnect. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.
     */
    openIdConnectUrl?: string;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * OAuth Flows Object
 *
 * Allows configuration of the supported OAuth Flows.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#oauth-flows-object
 */
export interface OAuthFlowsObject {
    /**
     * Configuration for the OAuth Implicit flow.
     */
    implicit?: OAuthFlowObject;

    /**
     * Configuration for the OAuth Resource Owner Password flow.
     */
    password?: OAuthFlowObject;

    /**
     * Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0.
     */
    clientCredentials?: OAuthFlowObject;

    /**
     * Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0.
     */
    authorizationCode?: OAuthFlowObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * OAuth Flow Object
 *
 * Configuration details for a supported OAuth Flow
 *
 * @see https://spec.openapis.org/oas/v3.1.0#oauth-flow-object
 *
 * @example
 * {
 *   "authorizationUrl": "https://example.com/api/oauth/dialog",
 *   "scopes": {
 *     "write:pets": "modify pets in your account",
 *     "read:pets": "read your pets"
 *   }
 * }
 *
 * {
 *   "authorizationUrl": "https://example.com/api/oauth/dialog",
 *   "tokenUrl": "https://example.com/api/oauth/token",
 *   "scopes": {
 *     "write:pets": "modify pets in your account",
 *     "read:pets": "read your pets"
 *   }
 * }
 */
export interface OAuthFlowObject {
    /**
     * REQUIRED for implicit and authorizationCode. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
     */
    authorizationUrl?: string;

    /**
     * REQUIRED for password, clientCredentials, and authorizationCode. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
     */
    tokenUrl?: string;

    /**
     * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
     */
    refreshUrl?: string;

    /**
     * REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.
     */
    scopes: { [scope: string]: string };

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}

/**
 * Tag Object
 *
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#tag-object
 *
 * @example
 * {
 *   "name": "pet",
 *   "description": "Pets operations"
 * }
 */
export interface TagObject {
    /**
     * REQUIRED. The name of the tag.
     */
    name: string;

    /**
     * A description for the tag. [CommonMark] syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Additional external documentation for this tag.
     */
    externalDocs?: ExternalDocumentationObject;

    /**
     * Specification Extensions.
     * @see https://spec.openapis.org/oas/v3.1.0#specification-extensions
     */
    [extension: `x-${string}`]: any;
}
