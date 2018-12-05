var ContextMenuAction = /** @class */ (function () {
    /**
     *
     * @param {string} config.id
     * @param {string} config.displayName
     * @param {string} config.parentPanelId - set if this action belongs on a nested child panel
     * @param {function} options.onClick
     * @param {ContextMenuPanel} options.childContextMenuPanel - optional child panel to open when clicked.
     * @param {function} options.isDisabled - optionally set a custom disabled function
     * @param {function} options.isVisible - optionally set a custom isVisible function
     * @param {Element} options.icon
     */
    function ContextMenuAction(config, options) {
        if (options === void 0) { options = {}; }
        this.id = config.id;
        this.displayName = config.displayName;
        this.parentPanelId = config.parentPanelId;
        this.icon = options.icon;
        this.childContextMenuPanel = options.childContextMenuPanel;
        if (options.onClick) {
            this.onClick = options.onClick;
        }
        if (options.isDisabled) {
            this.isDisabled = options.isDisabled;
        }
        if (options.isVisible) {
            this.isVisible = options.isVisible;
        }
    }
    /**
     * @param {PanelActionAPI} panelActionAPI
     */
    ContextMenuAction.prototype.onClick = function (panelActionAPI) {
        return;
    };
    /**
     * Whether this action should be visible based on the parameters given.  Defaults to always visible.
     * @param {PanelActionAPI} panelActionAPI
     * @return {boolean}
     */
    ContextMenuAction.prototype.isVisible = function (panelActionAPI) {
        return true;
    };
    /**
     * Whether this action should be disabled based on the parameters given. Defaults to always enabled.
     * @param {PanelActionAPI} panelActionAPI
     */
    ContextMenuAction.prototype.isDisabled = function (panelActionAPI) {
        return false;
    };
    return ContextMenuAction;
}());
export { ContextMenuAction };
