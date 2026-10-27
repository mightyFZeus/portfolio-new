# Design

## Direction

A dark personal portfolio for Bolarin Olabisi. The intended visitor is evaluating mobile engineering work on a laptop or phone. White typography leads, with interactive "think / build / ship" choices explaining his approach. A full-bleed canvas of fine flowing lines responds gently to pointer movement behind the hero. No App Store screenshots, stock images, or mock devices. Confident, precise, hands-on.

## Color

Restrained charcoal and white with a sharp green accent. Use the OKLCH tokens in `src/app/globals.css`: background, surface, foreground, muted, line, and accent. Avoid decorative gradients, glowing orbs, and translucent panels.

## Typography

Self-hosted Manrope variable, weights 400-800. Large personal name, medium-weight section headings, readable short descriptions, small italic project tags. All letter spacing is zero. Type sizes use explicit responsive breakpoints rather than viewport scaling.

## Layout

Maximum content width 1240px with generous desktop gutters. The hero has original interactive typography, with a compact horizontal selector on mobile and a shorter layout for short screens. About follows the hero. Featured projects use full-width rows with prominent titles, concise descriptions, and store links, stacking their contents on mobile. Other mobile projects use a compact two-column list, collapsing to one column on mobile. System designs are horizontal rows. Backend skills have their own supporting section, and cloud learning is a small note in the about area. AI development and Codex workflow use an unframed section with a numbered sequence that stacks on mobile.

## Components and Motion

Four-pixel command buttons, an outlined resume link, native disclosures for expertise, and a compact mobile navigation menu. Staggered entrances, a reading-progress line, responsive button presses, moving link underlines, and subtle pointer response use transform and opacity. The hero approach selector uses native buttons with pressed states and an announced, height-reserved detail area. Canvas motion has a pause/resume control, runs at most 30fps, and stops offscreen or when the page is hidden. Reduced motion keeps the canvas static and removes decorative movement and reveal delays.

## Content

Senior React Native development is the primary positioning. Preserve original store URLs, testing availability, system board links, and the CV download. Backend skills and NaraTherapy's AI chatbot experience are grounded in the CV. Codex is the user's confirmed coding agent. Cloud engineering is explicitly something being learned, with no invented provider, certification, or experience claim.
