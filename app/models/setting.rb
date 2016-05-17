# == Schema Information
#
# Table name: settings
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  panel_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_settings_on_panel_id  (panel_id)
#

class Setting < ActiveRecord::Base
  belongs_to :panel
end
