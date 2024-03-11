/*
import expect from "expect";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.expect = expect;
 */
import '@testing-library/jest-dom/vitest';
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(cleanup);