import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

    transform(timestamp:number) {
        return new Date().toLocaleString(timestamp.toString());//TODO 不知道要不要乘1000
    }
}
