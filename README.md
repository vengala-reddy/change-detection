# ChangeDetection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Overview
This project explores how Angular performs change detection and various strategies to optimize it. The following concepts are covered:

- Understanding How Angular Performs Change Detection
- Change Detection During Development: ExpressionChangedAfterChecked Errors
- Avoiding Zone Pollution (`runOutsideAngular`, `NgZone`)
- Using the OnPush Strategy
- Working with OnPush & Signals
- Using Signals for Sharing Data Across Components with OnPush
- Going Zoneless (Removing polyfills: `zone.js` in `angular.json` & Adding provideExperimentalZonelessChangeDetection in the `appConfig` Providers)

## Table of Contents
1. Understanding How Angular Performs Change Detection
2. Change Detection During Development: ExpressionChangedAfterChecked Errors
3. Avoiding Zone Pollution (`runOutsideAngular`, `NgZone`)
4. Using the OnPush Strategy
5. Working with OnPush & Signals
6. Using Signals for Sharing Data Across Components with OnPush
7. Going Zoneless

## Understanding How Angular Performs Change Detection
Angular's change detection mechanism is responsible for updating the view whenever the application state changes. It uses a tree of components and checks each component to see if its data has changed.

## Change Detection During Development: ExpressionChangedAfterChecked Errors
During development, you might encounter `ExpressionChangedAfterChecked` errors. These occur when Angular detects a change in the application state after it has already checked the component's view.

## Avoiding Zone Pollution (`runOutsideAngular`, `NgZone`)
Zone pollution can lead to unnecessary change detection cycles. Using `runOutsideAngular` and `NgZone` can help avoid this by running certain code outside Angular's zone.

## Using the OnPush Strategy
The OnPush change detection strategy can be used to optimize performance by checking the component only when its input properties change.

## Working with OnPush & Signals
Combining the OnPush strategy with signals can further optimize change detection by ensuring that only the necessary components are checked.

## Using Signals for Sharing Data Across Components with OnPush
Signals can be used to share data across components while using the OnPush strategy, ensuring efficient and predictable change detection.

## Going Zoneless
Removing `zone.js` polyfills from `angular.json` and adding provideExperimentalZonelessChangeDetection in the `appConfig` providers can help in achieving a zoneless Angular application, further optimizing performance.

## Conclusion
This project provides a comprehensive guide to understanding and optimizing Angular's change detection mechanism, covering essential concepts and best practices.

## Getting Started
To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install

