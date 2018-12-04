import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SimpleReadingConfiguration} from '@app/shared/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading.configuration';
import {SensorReadingType} from '@app/shared/model/dashboard/configuration/shared/sensor-reading-type.enum';
import {SseService} from '@app/core/service/sse/sse.service';

@Component({
  selector: 'app-simple-reading',
  templateUrl: './simple-reading.component.html',
  styleUrls: ['./simple-reading.component.css']
})
export class SimpleReadingComponent implements OnInit, OnDestroy {

  private sensorReadingType = SensorReadingType;

  private configuration: SimpleReadingConfiguration;

  @Input() atrib: string;

  private subscription;

  constructor(private sseService: SseService) {

  }

  ngOnInit() {
    this.configuration = new SimpleReadingConfiguration(this.atrib);
    switch (this.atrib) {
      case SensorReadingType.HUMIDITY.toString().toLowerCase():
        this.subscribeToHumidityEvents();
        break;
      case SensorReadingType.TEMPERATURE.toString().toLowerCase():
        this.subscribeToTemperatureEvents();
        break;
      case SensorReadingType.PROXIMITY.toString().toLowerCase():
        this.subscribeToProximityEvents();
        break;
      case SensorReadingType.MOISTURE.toString().toLowerCase():
        this.subscribeToMoistureEvents();
        break;
      default:
        break;
    }
  }

  private subscribeToHumidityEvents() {
    this.subscription = this.sseService
      .humidityState
      .subscribe(
        humidity => {
          try {
            console.log('humidity event simple-reading-component ', humidity);
            this.handleHumidityEvents(humidity);
          } catch (e) {

          }
        }
      );
  }

  private subscribeToTemperatureEvents() {
    this.subscription = this.sseService
      .temperatureState
      .subscribe(
        temperature => {
          try {
            console.log('temperature event simple-reading-component ', temperature);
            this.handleTemperatureEvents(temperature);
          } catch (e) {

          }
        }
      );
  }

  private subscribeToProximityEvents() {
    this.subscription = this.sseService
      .proximityState
      .subscribe(
        proximity => {
          try {
            this.handleProximityEvents(proximity);
          } catch (e) {

          }
        }
      );
  }

  private subscribeToMoistureEvents() {
    this.subscription = this.sseService
      .moistureState
      .subscribe(
        moisture => {
          try {
            console.log('moisture event simple-reading-component ', moisture);
            this.handleMoistureEvents(moisture);
          } catch (e) {

          }
        }
      );
  }

  private handleHumidityEvents(object) {
    if (this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.humidity;
  }

  private handleTemperatureEvents(object) {
    console.log(this.configuration.component.id);
    if (this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.temperature;
  }

  private handleProximityEvents(object) {
    if (this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.distance;
  }

  private handleMoistureEvents(object) {
    if (this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.moisture;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
