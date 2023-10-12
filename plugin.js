export default class MouseInputMod {
    prestart() {
        sc.Control.inject({
            menuBack() {
                return this.autoControl ? this.autoControl.get("menuBack") : ig.input.pressed("pause") || ig.input.pressed("back") || ig.input.pressed("dash") || ig.input.pressed("guard") || ig.gamepad.isButtonPressed(ig.BUTTONS.FACE1)
            }
        });
    }

    poststart() {
        ig.input.bind(ig.KEY.MOUSE_BACK, "melee");
        ig.input.bind(ig.KEY.MOUSE_FORWARD, "special");
        ig.input.bind(ig.KEY.MOUSE_RIGHT, "guard");
    }
}

