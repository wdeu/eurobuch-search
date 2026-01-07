/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Eurobuch Platform ID - Your Eurobuch platform identifier (use 'test' for testing without account) */
  "platform": string,
  /** Eurobuch Password - Your Eurobuch API password (use 'test' for testing without account) */
  "password": string,
  /** Result Limit - Maximum number of results to display per search */
  "resultLimit": "10" | "20" | "30"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `eurobuch-search` command */
  export type EurobuchSearch = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `eurobuch-search` command */
  export type EurobuchSearch = {}
}

