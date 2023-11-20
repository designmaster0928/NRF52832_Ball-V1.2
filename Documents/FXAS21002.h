/**
 * FXAS21002
 * 3-Axis Digital Angular Rate Gyroscope
 */
#ifndef FXAS21002_H
#define FXAS21002_H

#include "mbed.h"

/**
* 
*
* @code
#include "mbed.h"
#include "FXAS21002.h"
#define FXAS21002_I2C_ADDRESS (0x20)

#if defined (TARGET_KL25Z)
#define PIN_SCL  PTE1
#define PIN_SDA  PTE0
#elif defined (TARGET_KL46Z)
#define PIN_SCL  PTE1
#define PIN_SDA  PTE0
#elif defined (TARGET_K64F)
#define PIN_SCL  PTE24
#define PIN_SDA  PTE25
#elif defined (TARGET_K22F)
#define PIN_SCL  PTE1
#define PIN_SDA  PTE0
#elif defined (TARGET_KL05Z)
#define PIN_SCL  PTB3
#define PIN_SDA  PTB4
#elif defined (TARGET_NUCLEO_F411RE)
#define PIN_SCL  PB_8
#define PIN_SDA  PB_9
#else
 #error TARGET NOT DEFINED
#endif

int main() {
    uint16_t result = 0 ;
    int16_t temperature = 0 ;
    FXAS21002 FXAS21002(PIN_SDA, PIN_SCL, FXAS21002_I2C_ADDRESS) ;
    
    while(1) {
        result = FXAS21002.getValue(&temperature) ;
        printf("Temp %d C\n", temperature) ;
        wait(1) ;
    }
}
* @endcode
*/
class FXAS21002
{
public:
  /**
  * FXAS21002 constructor
  *
  * @param sda SDA pin
  * @param sdl SCL pin
  * @param addr addr of the I2C peripheral
  */
  FXAS21002(PinName sda, PinName scl, int addr);

  /**
  * FXAS21002 destructor
  */
  ~FXAS21002();
  
  /**
   * status register
   */
  uint8_t getStatus(void) ;
  
  /**
   * getX returns the value of 
   *  REG_OUT_X_MSB  
   *  REG_OUT_X_LSB
   * as a signed 16bit integer
   */
  int16_t getX(void) ;
  
    /**
   * getY returns the value of 
   *  REG_OUT_Y_MSB  
   *  REG_OUT_Y_LSB
   * as a signed 16bit integer
   */
  int16_t getY(void) ;
  
    /**
   * getZ returns the value of 
   *  REG_OUT_Z_MSB  
   *  REG_OUT_Z_LSB
   * as a signed 16bit integer
   */
  int16_t getZ(void) ;
  
  /**
   * activate/deactivate the sensor
   *
   * @param mode true: Active false: Standby
   */ 
  void    activate(bool mode) ;
  
   /**
   * Self-Test enable
   *
   * @param mode true: Self-Test enabled, false: Self-Test disabled
   */
   void selftest(bool mode) ;
   
   /**
    * Standby/Ready mode selection
    *
    * @param mode true: Ready, false: Standby
    */
   void ready(bool mode) ; 
   
  /**
   * get value of CTRL_REG1
   */
  uint8_t getCTRL1(void) ;
  
  /**
   * set value to CTRL_REG1
   *
   * @param value value for CTRL_REG1
   */
  void    setCTRL1(uint8_t value) ;
  
  /** 
   * get value of CTRL_REG2
   */
  uint8_t getCTRL2(void) ;
  
  /**
   * set value to CTRL_REG2
   *
   * @param value value for CTRL_REG2
   */
  void    setCTRL2(uint8_t value) ;
  
  /**
   * get value of CTRL_REG3
   */
  uint8_t getCTRL3(void) ;
  
  /**
   * set value to CTRL_REG3
   *
   * @param value value for CTRL_REG3
   */
  void    setCTRL3(uint8_t value) ;
  


private:
  I2C m_i2c;
  int m_addr;
  void readRegs(int addr, uint8_t * data, int len);
  void writeRegs(uint8_t * data, int len);

};

#endif