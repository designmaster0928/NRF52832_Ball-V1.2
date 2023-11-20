/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

#pragma once

#include <platform/nrfconnect/ExternalFlashManager.h>

#if CONFIG_CHIP_OTA_REQUESTOR
#include "ota_image_processor_base_impl.h"
#include <platform/nrfconnect/OTAImageProcessorImpl.h>

/**
 * Select recommended OTA image processor implementation.
 *
 * If the application uses QSPI external flash and enables API for controlling
 * power states of peripherals, select the implementation that automatically
 * powers off the external flash when no longer needed. Otherwise, select the
 * most basic implementation.
 */
chip::DeviceLayer::OTAImageProcessorImpl &GetOTAImageProcessor();

/** Initialize basic OTA requestor.
 *
 * Initialize all necessary components and start the OTA requestor state machine.
 * Assume that the device is not able to ask a user for consent before applying
 * an update so the confirmation must be done on the OTA provider side.
 */
void InitBasicOTARequestor();

/**
 * Check if the current image is the first boot the after OTA update and if so
 * confirm it in MCUBoot.
 *
 * @return CHIP_NO_ERROR if the image has been confirmed, or it is not the first
 * boot after the OTA update.
 * Other CHIP_ERROR codes if the image could not be confirmed.
 */
void OtaConfirmNewImage();

#endif /* CONFIG_CHIP_OTA_REQUESTOR */

/**
 * Get FlashHandler static instance.
 *
 * Returned object can be used to control the QSPI external flash,
 * which can be introduced into sleep mode and woken up on demand.
 */
chip::DeviceLayer::ExternalFlashManager &GetFlashHandler();
