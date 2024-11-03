const ContainerActions = ({
    onUpAction,
    onDownAction
}) => {
    return (
        <div className="hl_page-creator--actions">
          <div className="move-actions">
            <span data-tooltip="tooltip" data-placement="top" title="Up">
              <i onClick={onUpAction} className="icon icon-arrow-up-2" />
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Down">
              <i onClick={onDownAction} className="icon icon-arrow-down-2" />
            </span>
          </div>
          <div className="more-actions">
            <span data-tooltip="tooltip" data-placement="top" title="Settings">
              <i className="fas fa-cog" />
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Clone">
              <i className="far fa-eye" />
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Save">
              <i className="far fa-copy" />
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Delete">
              <i className="far fa-trash-alt" />
            </span>
          </div>
        </div>
    )
}

export default ContainerActions;