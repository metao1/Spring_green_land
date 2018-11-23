import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {SensorReadingType} from '../../../shared/sensor-reading-type.enum';
import {SimpleReadingColor} from './simple-reading-color.enum';
import {HumiditySensor} from "@app/shared/model/rpicomponent/humidity-sensor/humidity-sensor.model";
import {RPiComponentType} from "@app/shared/model/rpicomponent/rpicomponent-type.enum";
import {HumiditySensorPreferences} from "@app/shared/model/rpicomponent/humidity-sensor/humidity-sensor.preferences";
import {TemperatureSensor} from "@app/shared/model/rpicomponent/temperature-sensor/temperature-sensor.model";
import {MoistureSensor} from "@app/shared/model/rpicomponent/moisture-sensor/moisture-sensor.model";
import {MoistureSensorPreferences} from "@app/shared/model/rpicomponent/moisture-sensor/moisture-sensor.preferences";
import {TemperatureSensorPreferences} from "@app/shared/model/rpicomponent/temperature-sensor/temperature-sensor.preferences";

export class SimpleReadingConfiguration {

  type: SensorReadingType;
  component: RPiComponent;
  size: string[];
  color: SimpleReadingColor;

  /*constructor(component: RPiComponent) {
    this.component = component;
    this.size = [];
    this.color = SimpleReadingColor.GREEN;
  }*/

  constructor(componentType: String) {
    switch (componentType) {
      case 'humidity':
        this.color = SimpleReadingColor.GREEN;
        this.type = SensorReadingType.HUMIDITY;
        this.component = new HumiditySensor(10, 'humidity', null, RPiComponentType.HUMIDITY,
          new HumiditySensorPreferences(10, 1, 100, true, true));
        break;
      case 'temperature':
        this.color = SimpleReadingColor.RED;
        this.type = SensorReadingType.TEMPERATURE;
        this.component = new TemperatureSensor(12, 'temperature', null, RPiComponentType.TEMPERATURE,
          new TemperatureSensorPreferences(12, 1, 100, true, true));
        break;
      case 'moisture':
        this.type = SensorReadingType.MOISTURE;
        this.color = SimpleReadingColor.BLUE;
        this.component = new MoistureSensor(11, 'moisture', null, RPiComponentType.MOISTURE,
          new MoistureSensorPreferences(11, 1, 100, true, true));
        break;
    }
    this.size = [];
  }
}
