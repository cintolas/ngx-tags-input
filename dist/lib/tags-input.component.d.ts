import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class TagsInputComponent implements OnInit, ControlValueAccessor {
    selected: string;
    tags: any[];
    onTouchedCallback: () => void;
    onChangeCallback: (_: any) => void;
    maxTags: number;
    type: string;
    removeLastOnBackspace: boolean;
    canDeleteTags: boolean;
    placeholder: string;
    options: any;
    displayField: string;
    minLengthBeforeOptions: number;
    scrollableOptions: boolean;
    scrollableOptionsInView: number;
    onTagsChanged: EventEmitter<{}>;
    onMaxTagsReached: EventEmitter<{}>;
    onNoOptionsMatch: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    getPlaceHolder(): string;
    tagsChanged(type: string, tag: any): void;
    removeLastTag(tagInput: HTMLInputElement): void;
    addTag(tagInput: HTMLInputElement): void;
    addPredefinedTag(tag: Object): void;
    removeTag(tagToRemove: any): void;
    maximumOfTagsReached(): boolean;
    isDeleteable(tag: any): boolean;
    typeaheadOnSelect(e: any): void;
    typeaheadOnNoMatch(e: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
