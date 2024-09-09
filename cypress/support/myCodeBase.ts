export function myCodeBase(sample: any) {
    describe(sample.general.title, () => {
        beforeEach(() => {
            cy.visit(sample.general.visit);
        });

        const actionMap: { [key: string]: (arg: any) => void } = {
            'wait': cy.wait,
            'multi_click': cy.clickEachItem,
            'multi_input': cy.typeToEachInput,
            'multi_select': cy.selectMultiple,
            'check_contains': cy.containsChecker,
            'clear_and_type': cy.clearAndTypeToEachInputs,
            'first_click': cy.firstClick,
            'check_required': cy.requiredCheck,
            'log': cy.log,
            'type_and_select': cy.containOneAndSelectItem,
            'enable_disable': cy.checkEnableDisable,
        };

        sample.episodes.forEach((episode: any[]) => {
            const title = episode[0]?.title || 'No title available';
            it(title, () => {
                episode.forEach((actionObj: any) => {
                    for (const [action, arg] of Object.entries(actionObj)) {
                        const actionFn = actionMap[action];
                        if (actionFn) {
                            actionFn(arg);
                        } else {
                            console.error(`Unknown action: ${action}`);
                        }
                    }
                });
            });
        });
    });
}
