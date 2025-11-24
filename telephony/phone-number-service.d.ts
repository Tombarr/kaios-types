import { DOMRequest } from '../common';

/**
 * File: dom/webidl/PhoneNumberService.webidl
 */

/**
 * Service for handling phone number operations like fuzzy matching and normalization.
 * @jsImplementation @mozilla.org/phoneNumberService;1
 * @navigatorProperty mozPhoneNumberService
 * @permissions phonenumberservice
 */
export interface PhoneNumberService {
  /**
   * Checks if two phone numbers are fuzzy matches.
   * @param number1 - The first number to compare. [TreatNullAs=EmptyString]
   * @param number2 - The second number to compare. [TreatNullAs=EmptyString]
   */
  fuzzyMatch(number1?: string, number2?: string): DOMRequest;

  /**
   * Normalizes a phone number.
   * @param number - The phone number to normalize.
   * @returns The normalized phone number.
   */
  normalize(number: string): string;
}
