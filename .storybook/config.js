import { configure, addDecorator } from "@storybook/react"
import withTheme from "../src/core/decorators/with-theme"

addDecorator(withTheme);
