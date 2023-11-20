/*
 * Copyright (c) 2023 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

#pragma once

#include <app-common/zap-generated/ids/Attributes.h>
#include <app-common/zap-generated/ids/Clusters.h>
#include <app/util/attribute-storage.h>

class BridgedDeviceDataProvider {
public:
	using UpdateAttributeCallback = void (*)(BridgedDeviceDataProvider &dataProvider, chip::ClusterId clusterId,
						 chip::AttributeId attributeId, void *data, size_t dataSize);

	explicit BridgedDeviceDataProvider(UpdateAttributeCallback callback) { mUpdateAttributeCallback = callback; }
	virtual ~BridgedDeviceDataProvider() = default;

	virtual void Init() = 0;
	virtual void NotifyUpdateState(chip::ClusterId clusterId, chip::AttributeId attributeId, void *data,
				       size_t dataSize) = 0;
	virtual CHIP_ERROR UpdateState(chip::ClusterId clusterId, chip::AttributeId attributeId, uint8_t *buffer) = 0;

	CHIP_ERROR NotifyReachableStatusChange(bool isReachable);

protected:
	UpdateAttributeCallback mUpdateAttributeCallback;

private:
	struct ReachableContext {
		bool mIsReachable;
		BridgedDeviceDataProvider *mProvider;
	};
};
