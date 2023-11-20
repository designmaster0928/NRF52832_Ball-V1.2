#include "mbed.h"
#include "FXAS21002.h"

/* Register Address definitions */
#define REG_STATUS          0x00
#define REG_OUT_X_MSB       0x01
#define REG_OUT_X_LSB       0x02
#define REG_OUT_Y_MSB       0x03
#define REG_OUT_Y_LSB       0x04
#define REG_OUT_Z_MSB       0x05
#define REG_OUT_Z_LSB       0x06
#define REG_DR_STATUS       0x07
#define REG_F_STATUS        0x08
#define REG_F_SETUP         0x09
#define REG_F_EVENT         0x0A
#define REG_INT_SRC_FLAG    0x0B
#define REG_WHO_AM_I        0x0C
#define REG_CTRL_REG0       0x0D
#define REG_RT_CFG          0x0E
#define REG_RT_SRC          0x0F
#define REG_RT_THS          0x10
#define REG_RT_COUNT        0x11
#define REG_TEMP            0x12
#define REG_CTRL_REG1       0x13
#define REG_CTRL_REG2       0x14
#define REG_CTRL_REG3       0x15


FXAS21002::FXAS21002(PinName sda, PinName scl, int addr) : m_i2c(sda, scl), m_addr(addr<<1) {
    // activate the peripheral
}

FXAS21002::~FXAS21002() { }

uint8_t FXAS21002::getStatus(void) 
{
    uint8_t status ;
    readRegs(REG_STATUS, &status, 1) ;
    return( status ) ;
}

int16_t FXAS21002::getX(void)
{
    uint8_t data[2] ;
    int16_t value ;
    readRegs(REG_OUT_X_MSB, &data[0], 1) ;
    readRegs(REG_OUT_X_LSB, &data[1], 1) ;
    value = (data[0] << 8) | data[1] ;
    return(value) ;
}

int16_t FXAS21002::getY(void)
{
    uint8_t data[2] ;
    int16_t value ;
    readRegs(REG_OUT_Y_MSB, &data[0], 1) ;
    readRegs(REG_OUT_Y_LSB, &data[1], 1) ;
    value = (data[0] << 8) | data[1] ;
    return(value) ;
}

int16_t FXAS21002::getZ(void)
{
    uint8_t data[2] ;
    int16_t value ;
    readRegs(REG_OUT_Z_MSB, &data[0], 1) ;
    readRegs(REG_OUT_Z_LSB, &data[1], 1) ;
    value = (data[0] << 8) | data[1] ;
    return(value) ;
}

void FXAS21002::selftest(bool mode) 
{
    uint8_t value ;
    value = getCTRL1() ;
    if (mode) {
        value |= 0x10 ;
    } else {
        value ^= 0x10 ;
    }
    setCTRL1(value) ;
}

void    FXAS21002::activate(bool mode) 
{
    uint8_t value ;
    value = getCTRL1() ;
    if (mode) {
        value |= 0x02 ;
    } else {
        value ^= 0x02 ;
    }
    setCTRL1(value) ;
}

void FXAS21002::ready(bool mode) 
{
    uint8_t value ;
    value = getCTRL1() ;
    if (mode) {
        value |= 0x01 ;
    } else {
        value ^= 0x01 ;
    }
    setCTRL1(value) ;   
} 

uint8_t FXAS21002::getCTRL1(void) 
{
    uint8_t value ;
    readRegs(REG_CTRL_REG1, &value, 1) ;
    return(value) ;
}

void    FXAS21002::setCTRL1(uint8_t value) 
{
    uint8_t data[2] ;
    data[0] = REG_CTRL_REG1 ;
    data[1] = value ;
    writeRegs(data, 2) ;
}

uint8_t FXAS21002::getCTRL2(void) 
{
    uint8_t value ;
    readRegs(REG_CTRL_REG2, &value, 1) ;
    return(value) ;
}

void    FXAS21002::setCTRL2(uint8_t value) 
{
    uint8_t data[2] ;
    data[0] = REG_CTRL_REG2 ;
    data[1] = value ;
    writeRegs(data, 2) ;
}

uint8_t FXAS21002::getCTRL3(void) 
{
    uint8_t value ;
    readRegs(REG_CTRL_REG3, &value, 1) ;
    return(value) ;
}

void    FXAS21002::setCTRL3(uint8_t value) 
{
    uint8_t data[2] ;
    data[0] = REG_CTRL_REG3 ;
    data[1] = value ;
    writeRegs(data, 2) ;
}


void FXAS21002::readRegs(int addr, uint8_t * data, int len) {
    char t[1] = {addr};
    m_i2c.write(m_addr, t, 1, true);
    m_i2c.read(m_addr, (char *)data, len);
}

void FXAS21002::writeRegs(uint8_t * data, int len) {
    m_i2c.write(m_addr, (char *)data, len);
}