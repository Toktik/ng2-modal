import { ICustomModal, ICustomModalComponent } from '../models/ICustomModal';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * Data definition
 */
export declare class OKOnlyContent {
    title: string;
    body: string;
    okText: string;
    constructor(title?: string, body?: string, okText?: string);
}
/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
export declare class OKOnlyModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: OKOnlyContent;
    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal);
    ok(): void;
}
